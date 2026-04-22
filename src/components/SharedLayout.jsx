import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUp, ArrowRight, Menu, X } from "lucide-react";

export default function SharedLayout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on navigation
    setIsMenuOpen(false);

    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else if (location.hash === "") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, "", `/#${targetId}`);
      }
    }
  };

  const navItems = [
    ["نبذة عني", "about", false],
    ["لماذا أنا", "why-me", false],
    ["دراسات حالة", "case-studies", false],
    ["Win Win Win", "contact", false],
    ["البقرة البنفسجية", "purple-cow", false],
    ["الفلسفة", "philosophy", false],
    ["تأثير الأغنية التسويقية", "marketing-song", false],
    ["المسابقات", "competitions", false],
    ["جميع الموظفين مسوّقون", "/AllEmployeesAreMarketers", true],
  ];

  const isCaseStudy = location.pathname.includes("/AllEmployeesAreMarketers");
  const scrollThreshold = 60;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* HEADER */}
      <nav className={`nav${scrollY > scrollThreshold ? " nav--scrolled" : ""}`} style={{ zIndex: 100 }}>
        {isCaseStudy ? (
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700, color: 'var(--purple)', fontSize: '18px' }}>جميع الموظفين مسوّقون</span>
            <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <span className="hide-on-mobile">العودة للصفحة الرئيسية</span>
              <span className="show-on-mobile" style={{ display: 'none' }}>الرئيسية</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Nav */}
            <div className="nav__links hide-on-mobile" style={{ width: '100%', justifyContent: 'center' }}>
              {navItems.map(([label, target, isRoute]) => (
                isRoute ? (
                  <Link key={target} to={target} className="nav-link" style={{ cursor: 'pointer' }}>
                    {label}
                  </Link>
                ) : (
                  <a key={target} href={`#${target}`} onClick={(e) => handleNavClick(e, target)} className="nav-link" style={{ cursor: 'pointer' }}>
                    {label}
                  </a>
                )
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="mobile-nav-toggle" style={{ display: 'none', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: 'var(--purple)', fontSize: '18px' }}>مريم الحكيم</span>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dark)' }}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
              <div className="mobile-menu-overlay" style={{
                position: 'fixed', top: '60px', left: 0, right: 0, bottom: 0, background: 'rgba(253, 253, 253, 0.98)',
                padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px',
                zIndex: 99, overflowY: 'auto'
              }}>
                {navItems.map(([label, target, isRoute]) => (
                  isRoute ? (
                    <Link key={target} to={target} className="nav-link" onClick={() => setIsMenuOpen(false)} style={{ cursor: 'pointer', fontSize: '18px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '10px' }}>
                      {label}
                    </Link>
                  ) : (
                    <a key={target} href={`#${target}`} onClick={(e) => handleNavClick(e, target)} className="nav-link" style={{ cursor: 'pointer', fontSize: '18px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '10px' }}>
                      {label}
                    </a>
                  )
                ))}
              </div>
            )}
          </>
        )}
      </nav>

      {/* PAGE CONTENT */}
      {children}

      {/* FOOTER */}
      <div className="footer-bar" style={{ position: 'relative', zIndex: 10 }}>
        <div className="footer-container">
          <div className="footer__text">© 2026 مريم أحمد الحكيم | {isCaseStudy ? "دراسة حالة التسويق الطبي" : "كل الحقوق محفوظة"}</div>
          <div className="footer__text">مديرة تسويق · استراتيجية · نمو</div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px', // Left side in RTL is bottom-left visually in LTR, wait RTL makes 'right' natural for the scroll button? In RTL, the scrollbar is usually on the left or system default. Let's place it on the screen right visually (which is 'right' normally).
          right: 'auto', // Because RTL dir can flip layouts, but position fixed explicitly honors right/left. We'll use absolute left to keep it aside on RTL. Let's use left: 30px so it's on bottom-left, away from typical right side content.
          background: 'var(--purple)',
          color: 'var(--white)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: scrollY > 500 ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 10px 20px rgba(123, 47, 190, 0.3)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}
