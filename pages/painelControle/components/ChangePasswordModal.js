import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/painelControleStyles/ChangePasswordModal.module.css';

export default function ChangePasswordModal({ isOpen, onClose, onSuccess }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Função para fechar o modal e reiniciar todos os campos
  const handleCloseAndReset = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setError('');
    setLoading(false);
    onClose(); // Chama a função original do pai para fechar
  };

  if (!isOpen) {
    return null;
  }

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmNewPassword) {
      setError('A nova senha e a confirmação não correspondem.');
      return;
    }
    if (newPassword.length < 8) {
      setError('A nova senha deve ter no mínimo 8 caracteres.');
      return;
    }
    if (currentPassword === newPassword) {
      setError('A nova senha deve ser diferente da senha atual.');
      return;
    }

    setLoading(true);

    try {
      const storedUserData = localStorage.getItem('userData');
      if (!storedUserData) {
        throw new Error('Usuário não autenticado.');
      }
      const userData = JSON.parse(storedUserData);

      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userData.id,
          currentPassword,
          newPassword,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Ocorreu um erro.');
      }

      // Chama as funções do componente pai ao ter sucesso
      onSuccess();
      handleCloseAndReset();

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para fechar o modal apenas se o clique for no fundo escuro
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseAndReset();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div className={styles.titleContainer}>
            <Image
              src="/imagens/alert-icon.svg"
              alt="Ícone de Alerta"
              width={24}
              height={21}
              className={styles.warningIcon}
            />
            <h2 className={styles.title}>Trocar senha</h2>
          </div>
          <button onClick={handleCloseAndReset} className={styles.closeButton} disabled={loading}>
            &times;
          </button>
        </div>

        <p className={styles.infoText}>
          Para sua segurança, informe sua senha atual antes de definir uma nova.
        </p>

        <form className={styles.form} onSubmit={handleSave}>
          <div className={styles.formGroup}>
            <label htmlFor="currentPassword">Senha Atual:</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="newPassword">Nova Senha:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <span className={styles.helperText}>Mínimo 8 caracteres, com letras e números.</span>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmNewPassword">Confirmar Nova Senha:</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.modalActions}>
            <button type="button" onClick={handleCloseAndReset} className={styles.cancelButton} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className={styles.saveButton} disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}