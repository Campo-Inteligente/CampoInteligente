// components/ConfirmationModal.js
import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/painelControleStyles/ConfirmationModal.module.css';


export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <div className={styles.header}>
          <Image
            src="/imagens/aviso-triangulo.svg" // Ícone de aviso amarelo
            alt="Aviso"
            width={32}
            height={32}
          />
          <h2>{title}</h2>
        </div>
        <div className={styles.content}>
          <p>{message}</p>
          <p className={styles.warningText}>Esta ação não pode ser desfeita.</p>
        </div>
        <div className={styles.actions}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancelar
          </button>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  );
}