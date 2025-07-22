"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/painelControleStyles/PainelLayout.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LuLayoutDashboard,
  LuMessageSquare,
  LuUsers,
  LuUser,
  LuSettings,
  LuLogOut,
  LuSearch,
  LuBell,
  LuChevronDown,
} from "react-icons/lu";
import { useRouter } from "next/router";

// Função para pegar as iniciais de um nome
const getInitials = (name) => {
  if (!name || typeof name !== "string") return "?";
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial =
    nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : "";
  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};

// Componente que renderiza o avatar com as iniciais
const UserAvatar = ({ name }) => (
  <div className={styles.avatarInitials}>{getInitials(name)}</div>
);

// Componente do Sidebar
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Image
          src="/imagens/logo2.svg"
          alt="Campo Inteligente Logo"
          width={200}
          height={60}
        />
      </div>
      <nav className={styles.sidebarNav}>
        <p className={styles.navHeading}>Menu</p>
        <Link
          href="/painelControle/dashboard"
          className={
            pathname === "/painelControle/dashboard"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <LuLayoutDashboard size={20} /> <span>Dashboard</span>
        </Link>
        <Link
          href="/painelControle/messageSquare"
          className={
            pathname === "/painelControle/messageSquare"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <LuMessageSquare size={20} /> <span>Comunicação</span>
        </Link>
        <Link
          href="/painelControle/users"
          className={
            pathname === "/painelControle/users"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <LuUsers size={20} /> <span>Usuários</span>
        </Link>
      </nav>

      <div className={styles.sidebarFooter}>
        <p className={styles.navHeading}>Opções</p>
        <Link
          href="/painelControle/settings"
          className={
            pathname === "/painelControle/settings"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <LuSettings size={20} /> <span>Configurações</span>
        </Link>

        <Link
          href="/painelControle/about"
          className={
            pathname === "/painelControle/about"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <LuSettings size={20} /> <span>Sobre</span>
        </Link>
      </div>
    </aside>
  );
};

const TopNavbar = ({ user }) => {
  // Recebe 'user' como prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    router.push("/painelControle/business"); // Redireciona para o login
  };

  // Se não houver usuário, pode mostrar um estado de carregamento ou nada
  if (!user) {
    return <header className={styles.navbar}></header>; // Retorna uma navbar vazia enquanto carrega
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <LuSearch size={20} className={styles.searchIcon} />
      </div>
      <div className={styles.navbarActions}>
        <LuBell size={22} className={styles.notificationIcon} />
        <div className={styles.profileWrapper}>
          <div
            className={styles.profileDropdown}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <UserAvatar name={user.nome} />

            <div className={styles.profileInfo}>
              <span className={styles.profileWelcome}>Bem-vindo</span>
              <span className={styles.profileName}>{user.nome}</span>
            </div>
            <LuChevronDown size={20} className={styles.profileChevron} />
          </div>

          {isMenuOpen && (
            <div className={styles.dropdownMenu}>
                           {" "}
              <Link
                href="/painelControle/perfil"
                className={styles.dropdownItem}
              >
                                <LuUser size={18} />               {" "}
                <span>Meu perfil</span>             {" "}
              </Link>
                            <div className={styles.dropdownDivider} />         
                 {" "}
              <button className={styles.dropdownItem}>
                                <LuLogOut size={18} />               {" "}
                <span>Sair</span>             {" "}
              </button>
                         {" "}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default function PainelLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      setUser(JSON.parse(userDataString));
    }
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <div className={styles.mainContentWrapper}>
        <TopNavbar user={user} />
        <main className={styles.pageContent}>{children}</main>
      </div>
    </div>
  );
}
