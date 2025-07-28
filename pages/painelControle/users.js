import Head from "next/head";
// Importando todos os hooks necessários do React
import React, { useState, useRef, useEffect } from "react";
import jwt from "jsonwebtoken";
import PainelLayout from "../painelControle/components/PainelLayout";
import styles from "../../styles/painelControleStyles/Usuarios.module.css";
import prisma from "../../lib/prisma";
import Image from "next/image";
import {
  LuTable,
  LuLayoutGrid,
  LuList,
  LuSearch,
  LuDownload,
  LuTrash2,
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
  LuChevronDown,
} from "react-icons/lu";

// Mapeamento de status para estilos e ícones (agora usamos "Ativo" e "Inativo")
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
    iconSrc: "/imagens/aviso-triangulo.svg", // Caminho para sua imagem de status aviso
  },
};

const viewOptions = [
  { name: "Tabela", iconSrc: "/imagens/tabela-icon.svg" },
  { name: "Quadro", iconSrc: "/imagens/quadro-icon.svg" },
  { name: "Lista", iconSrc: "/imagens/lista-icon.svg" },
];

export default function UsuariosPage({ user, users }) {
  // NOVO: Estados para controlar o seletor de visualização
  const [currentView, setCurrentView] = useState(viewOptions[0]); // Começa com 'Tabela'
  const [isViewMenuOpen, setIsViewMenuOpen] = useState(false);
  const viewSwitcherRef = useRef(null); // Referência para o container do dropdown

  // NOVO: Lógica para fechar o menu ao clicar fora
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
    setIsViewMenuOpen(false); // Fecha o menu ao selecionar
    // Aqui você adicionaria a lógica para mudar a visualização da página
  };

  return (
    <PainelLayout user={user}>
      <Head>
        <title>Usuários | Painel Campo Inteligente</title>
      </Head>

      {/* Cabeçalho e Barra de Filtros (sem alterações) */}
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
                  <Image src="/imagens/down.svg" width={12} height={12} />
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
          <button className={styles.deleteButton} disabled>
            <LuTrash2 size={16} /> Excluir
          </button>
          <button className={`${styles.actionButton} ${styles.exportButton}`}>
            <LuDownload size={16} /> Exportar
          </button>
        </div>
      </div>

      {/* Tabela de Usuários com dados do seu banco */}
      <div className={styles.tableContainer}>
        <table className={styles.usersTable}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Nome do Usuário</th>
              <th>Telefone</th>
              <th>Localização</th>
              <th>Status</th>
              <th>Data de Cadastro</th>
              {/* A coluna "Cultivo Principal" foi removida */}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((dbUser) => {
              // Mapeia o valor do banco ('S'/'N') para o texto que queremos exibir
              const statusText = dbUser.ativo === "S" ? "Ativo" : "Inativo";
              const config = statusConfig[statusText];

              return (
                <tr key={dbUser.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <span className={styles.userName}>{dbUser.nome}</span>
                  </td>
                  <td>{dbUser.whatsapp_id}</td>
                  <td>{`${dbUser.cidade || ""} - ${dbUser.estado || ""}`}</td>
                  <td>
                    {config && config.iconSrc ? ( // Verifica se temos um caminho de imagem
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
                      {/* MUDANÇA: Usando o componente Image para o ícone de detalhes */}
                      <Image
                        src="/imagens/icons/editar-detalhes.svg" // Use o caminho do seu ícone de edição
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

      {/* Paginação */}
      <footer className={styles.pagination}>
        <div>
          <span>
            1-{users.length} de {users.length} linhas
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

    // Busca os dados no banco usando o nome do seu model: 'tb_usuarios'
    const userList = await prisma.tb_usuarios.findMany({
      orderBy: {
        nome: "asc",
      },
    });

    // Serializa os dados para que possam ser passados como props
    // Convertendo objetos 'Decimal' e 'Date' para tipos compatíveis com JSON (string/number)
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
