module.exports = {
  apps: [
    {
      name: "campointeligente",
      script: "npm",
      args: "run start",
      cwd: "/var/www/campointeligente-site",
      env: {
        NODE_ENV: "production",
        SMTP_HOST: "smtp.seuservidor.com",
        SMTP_USER: "usuario@dominio.com",
        SMTP_PASS: "senha_super_secreta"
      }
    }
  ]
};
