import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="Advanced MKT" className="h-7" />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Advanced MKT. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
