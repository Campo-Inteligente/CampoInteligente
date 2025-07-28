import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import jwt from "jsonwebtoken";
import PainelLayout from "../painelControle/components/PainelLayout";
import styles from "../../styles/painelControleStyles/Usuarios.module.css";
import prisma from "../../lib/prisma";
import Image from "next/image";
import ConfirmationModal from "./components/ConfirmationModal";
import SuccessToast from "./components/SuccessToast";
import {
  LuSearch,
  LuDownload,
  LuTrash2,
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";

// Mapeamento de status para estilos (sem alterações)
const statusConfig = {
  Ativo: {
    className: styles.statusAtivo,
    iconSrc: "/imagens/ativo-check.svg",
  },
  Inativo: {
    className: styles.statusInativo,
    iconSrc: "/imagens/inativo-x.svg",
  },
  "Pausa/Aviso": {
    className: styles.statusPausa,
    iconSrc: "/imagens/aviso-triangulo.svg",
  },
};

// Opções de visualização (sem alterações)
const viewOptions = [
  { name: "Tabela", iconSrc: "/imagens/tabela-icon.svg" },
  { name: "Quadro", iconSrc: "/imagens/quadro-icon.svg" },
  { name: "Lista", iconSrc: "/imagens/lista-icon.svg" },
];

export default function UsuariosPage({ user, users: initialUsers }) {
  const [displayedUsers, setDisplayedUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, title: "", message: "" });

  const [currentView, setCurrentView] = useState(viewOptions[0]);
  const [isViewMenuOpen, setIsViewMenuOpen] = useState(false);
  const viewSwitcherRef = useRef(null);

  // Lida com a seleção de um único usuário
  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((userId) => userId !== id); // Desmarcar
      } else {
        return [...prevSelected, id]; // Marcar
      }
    });
  };

  // Lida com "selecionar todos"
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allUserIds = displayedUsers.map((u) => u.id);
      setSelectedUsers(allUserIds);
    } else {
      setSelectedUsers([]);
    }
  };

  // Lógica de exclusão
  const handleConfirmDelete = async () => {
    try {
      const response = await fetch("/api/users/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedUsers }),
      });

      if (!response.ok) {
        throw new Error("Falha ao excluir usuários");
      }

      // Atualiza a UI sem recarregar a página
      setDisplayedUsers((current) =>
        current.filter((user) => !selectedUsers.includes(user.id))
      );

      // Limpa a seleção
      setSelectedUsers([]);

      // Fecha o modal
      setIsModalOpen(false);

      // Mostra o toast de sucesso
      setToast({
        show: true,
        title: "Usuário excluído",
        message: "O usuário foi excluído com sucesso.",
      });
    } catch (error) {
      console.error(error);
      // Aqui você poderia mostrar um toast de erro
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        viewSwitcherRef.current &&
        !viewSwitcherRef.current.contains(event.target)
      ) {
        setIsViewMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [viewSwitcherRef]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    setIsViewMenuOpen(false);
  };

  return (
    <PainelLayout user={user}>
      <Head>
        <title>Usuários | Painel Campo Inteligente</title>
      </Head>

      {/* NOVO: Renderiza o Toast de Sucesso */}
      {toast.show && (
        <SuccessToast
          title={toast.title}
          message={toast.message}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}

      {/* NOVO: Renderiza o Modal de Confirmação */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Você tem certeza?"
        message="Você está prestes a excluir permanentemente."
      />

      <header className={styles.pageHeader}>
        <div className={styles.titleGroup}>
          <h1>Usuários</h1>
          <p>Gerencie os usuários cadastrados e suas informações aqui.</p>
        </div>
      </header>

      <div className={styles.actionsContainer}>
        <div className={styles.viewSwitcher} ref={viewSwitcherRef}>
          <button
            onClick={() => setIsViewMenuOpen(!isViewMenuOpen)}
            className={styles.viewSwitcherButton}
          >
            <Image
              src={currentView.iconSrc}
              alt={currentView.name}
              width={16}
              height={16}
            />
            <span>{currentView.name}</span>
            <Image
              src="/imagens/down.svg"
              alt="Abrir menu"
              width={12}
              height={12}
            />
          </button>

          {isViewMenuOpen && (
            <div className={styles.viewSwitcherDropdown}>
              {viewOptions.map((option) => (
                <div
                  key={option.name}
                  className={`${styles.viewSwitcherItem} ${
                    currentView.name === option.name ? styles.active : ""
                  }`}
                  onClick={() => handleViewChange(option)}
                >
                  {/* ALTERAÇÃO: Usando o iconSrc correto da opção */}
                  <Image
                    src={option.iconSrc}
                    alt={option.name}
                    width={16}
                    height={16}
                  />
                  <span>{option.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.filterInputGroup}>
          <LuSearch size={18} className={styles.filterInputIcon} />
          <input
            type="text"
            placeholder="Buscar por nome, telefone, localização..."
            className={styles.filterInput}
          />
        </div>

        <div className={styles.ButtonContainer}>
          <button
            className={styles.deleteButton}
            disabled={selectedUsers.length === 0}
            onClick={() => setIsModalOpen(true)}
          >
            <LuTrash2 size={16} /> Excluir
          </button>
          <button className={`${styles.actionButton} ${styles.exportButton}`}>
            <LuDownload size={16} /> Exportar
          </button>
        </div>
      </div>

      <main>
        {currentView.name === "Tabela" && (
          <div className={styles.tableContainer}>
            <table className={styles.usersTable}>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={
                        displayedUsers.length > 0 &&
                        selectedUsers.length === displayedUsers.length
                      }
                    />
                  </th>
                  <th>Nome do Usuário</th>
                  <th>Telefone</th>
                  <th>Localização</th>
                  <th>Status</th>
                  <th>Data de Cadastro</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {displayedUsers.map((dbUser) => {
                  const statusText = dbUser.ativo === "S" ? "Ativo" : "Inativo";
                  const config = statusConfig[statusText];

                  return (
                    <tr key={dbUser.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(dbUser.id)}
                          onChange={() => handleSelectUser(dbUser.id)}
                        />
                      </td>
                      <td>
                        <span className={styles.userName}>{dbUser.nome}</span>
                      </td>
                      <td>{dbUser.whatsapp_id}</td>
                      <td>{`${dbUser.cidade || ""} - ${
                        dbUser.estado || ""
                      }`}</td>
                      <td>
                        {config ? (
                          <span
                            className={`${styles.statusPill} ${config.className}`}
                          >
                            {statusText}
                          </span>
                        ) : (
                          <span>{statusText}</span>
                        )}
                      </td>
                      <td>
                        {dbUser.data_cadastro
                          ? new Date(dbUser.data_cadastro).toLocaleDateString(
                              "pt-BR"
                            )
                          : "N/A"}
                      </td>
                      <td className={styles.tableActions}>
                        <button>Excluir</button>
                        <button>Enviar</button>
                        <a href="#">
                          <Image
                            src="/imagens/icons/editar-detalhes.svg"
                            alt="Ver detalhes"
                            width={14}
                            height={14}
                          />
                          Ver detalhes
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {currentView.name === "Quadro" && (
          <div className={styles.placeholderView}>
            <h2>Visualização em Quadro</h2>
            <p>A funcionalidade de quadro será implementada aqui.</p>
          </div>
        )}

        {currentView.name === "Lista" && (
          <div className={styles.placeholderView}>
            <h2>Visualização em Lista</h2>
            <p>A funcionalidade de lista será implementada aqui.</p>
          </div>
        )}
      </main>

      <footer className={styles.pagination}>
        <div>
          <span>
            1-{displayedUsers.length} de {displayedUsers.length} linhas
          </span>
        </div>
        <div className={styles.paginationControls}>
          <button disabled>
            <LuChevronsLeft size={16} />
          </button>
          <button disabled>
            <LuChevronLeft size={16} />
          </button>
          <span className={styles.activePage}>1</span>
          <button>
            <LuChevronRight size={16} />
          </button>
          <button>
            <LuChevronsRight size={16} />
          </button>
        </div>
      </footer>
    </PainelLayout>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.auth_token;

  if (!token) {
    return {
      redirect: { destination: "/painelControle/login", permanent: false },
    };
  }

  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    const userList = await prisma.tb_usuarios.findMany({
      orderBy: { nome: "asc" },
    });

    const serializedUsers = userList.map((user) => ({
      ...user,
      latitude: user.latitude ? user.latitude.toString() : null,
      longitude: user.longitude ? user.longitude.toString() : null,
      data_cadastro: user.data_cadastro
        ? user.data_cadastro.toISOString()
        : null,
      ultima_atividade: user.ultima_atividade
        ? user.ultima_atividade.toISOString()
        : null,
    }));

    return {
      props: {
        user: decodedUser,
        users: serializedUsers,
      },
    };
  } catch (error) {
    console.error("Token inválido ou falha ao buscar dados:", error);
    return {
      redirect: { destination: "/painelControle/login", permanent: false },
    };
  }
}
