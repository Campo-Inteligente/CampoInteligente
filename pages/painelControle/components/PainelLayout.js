"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/painelControleStyles/PainelLayout.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import { LuSearch, LuBell, LuChevronDown } from "react-icons/lu";

// --- COMPONENTES AUXILIARES ---

// Função para pegar as iniciais de um nome
const getInitials = (name) => {
  if (!name || typeof name !== "string") return "?";
  const nameParts = name.trim().split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial =
    nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : "";
  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};

// Componente que renderiza o avatar com as iniciais
const UserAvatar = ({ name }) => (
  <div className={styles.avatarInitials}>{getInitials(name)}</div>
);

// --- COMPONENTES PRINCIPAIS ---
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
          priority
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
          <Image
            src="/imagens/dashboard-icon.svg"
            alt="Dashboard"
            width={20}
            height={20}
            className={styles.navLinkIcon}
          />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/painelControle/messageSquare"
          className={
            pathname === "/painelControle/messageSquare"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <Image
            src="/imagens/comunicacao-icon.svg"
            alt="Comunicação"
            width={20}
            height={20}
          />
          <span>Comunicação</span>
        </Link>
        <Link
          href="/painelControle/users"
          className={
            pathname === "/painelControle/users"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <Image
            src="/imagens/usuarios-icon.svg"
            alt="Usuários"
            width={20}
            height={20}
          />
          <span>Usuários</span>
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
          <Image
            src="/imagens/configuracoes-icon.svg"
            alt="Configurações"
            width={20}
            height={20}
          />
          <span>Configurações</span>
        </Link>

        <Link
          href="/painelControle/about"
          className={
            pathname === "/painelControle/about"
              ? styles.navLinkActive
              : styles.navLink
          }
        >
          <Image
            src="/imagens/sobre-icon.svg"
            alt="Sobre"
            width={20}
            height={20}
          />
          <span>Sobre</span>
        </Link>
      </div>
    </aside>
  );
};

const TopNavbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout");
    } catch (error) {
      console.error("Falha ao fazer logout:", error);
    } finally {
      // Limpa dados do cliente e redireciona
      localStorage.removeItem("userData");
      router.push("/painelControle/business");
    }
  };

  if (!user) {
    return <header className={styles.navbar}></header>;
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
            <UserAvatar name={user.name || user.nome} />

            <div className={styles.profileInfo}>
              <span className={styles.profileWelcome}>Bem-vindo</span>
              <span className={styles.profileName}>
                {user.name || user.nome}
              </span>
            </div>
            <LuChevronDown size={20} className={styles.profileChevron} />
          </div>

          {isMenuOpen && (
            <div className={styles.dropdownMenu}>
              <Link
                href="/painelControle/profile"
                className={styles.dropdownItem}
              >
                <Image
                  src="/imagens/perfil-icon.svg"
                  alt="Meu Perfil"
                  width={20}
                  height={20}
                />
                <span>Meu perfil</span>
              </Link>
              <div className={styles.dropdownDivider} />
              <button onClick={handleLogout} className={styles.dropdownItem}>
                <Image
                  src="/imagens/sair-icon.svg"
                  alt="Sair"
                  width={20}
                  height={20}
                />
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// --- COMPONENTE DE LAYOUT PRINCIPAL ---

export default function PainelLayout({ children, user: initialUser }) {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    if (!initialUser) {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        try {
          setUser(JSON.parse(userDataString));
        } catch (e) {
          console.error("Erro ao ler dados do usuário do localStorage", e);
          setUser(null);
        }
      }
    }
  }, [initialUser]);

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
