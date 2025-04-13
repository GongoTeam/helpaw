import React, { useState } from "react";
import Footer from "../components/Footer";

const ShelterRatings = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortRating, setSortRating] = useState("");
  const [hasRequestsOnly, setHasRequestsOnly] = useState(false);

  const shelters = [
    {
      id: 1,
      name: "Притулок «Лапа Друга», Львів",
      rating: 4.8,
      logo: "🐾",
      category: "Собаки",
      city: "Львів",
      hasRequests: true,
      recommended: true,
    },
    {
      id: 2,
      name: "Притулок «Найкращий друг», Львів",
      rating: 4.7,
      logo: "🐶",
      category: "Коти",
      city: "Львів",
      hasRequests: false,
      recommended: false,
    },
    {
      id: 3,
      name: "Притулок «Милосердя», Київ",
      rating: 4.9,
      logo: "🐕",
      category: "Собаки",
      city: "Київ",
      hasRequests: true,
      recommended: true,
    },
  ];

  const handleFilter = () => {
    let filtered = [...shelters];

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(term) ||
          s.city.toLowerCase().includes(term),
      );
    }

    if (category !== "") {
      filtered = filtered.filter((s) => s.category === category);
    }

    if (hasRequestsOnly) {
      filtered = filtered.filter((s) => s.hasRequests);
    }

    if (sortRating === "asc") {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (sortRating === "desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  };

  const filteredShelters = handleFilter();

  const styles = {
    pageWrapper: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      backgroundColor: "rgba(30, 30, 30, 0.85)",
      fontFamily: "'PT Sans', sans-serif",
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      position: "relative",
    },
    headerRow: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    logoText: {
      margin: 0,
      fontWeight: 300,
      color: "#fff",
      fontSize: "24px",
      marginLeft: "15px",
    },
    burger: {
      background: "none",
      border: "none",
      color: "white",
      marginLeft: "200px",
      fontSize: "28px",
      cursor: "pointer",
      display: "none",
    },
    nav: {
      display: "flex",
      gap: "50px",
      marginRight: "40px",
      flexWrap: "wrap",
      alignItems: "center",
    },
    mobileNav: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      position: "absolute",
      top: "70px",
      right: "-40px",
      backgroundColor: "rgba(30, 30, 30, 0.95)",
      padding: "20px",
      zIndex: 999,
      width: "100%",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
    },
    content: {
      flex: 1,
    },
    section: {
      padding: "2rem",
    },
    searchBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    input: {
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      width: "200px",
    },
    select: {
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    toggle: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    card: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      flexWrap: "wrap",
    },
    cardLeft: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    rating: {
      fontSize: "1.1rem",
    },
    stars: {
      color: "#f4c430",
    },
    detailButton: {
      backgroundColor: "#d4edda",
      color: "#155724",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      cursor: "pointer",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.content}>
        <header style={styles.header}>
          <div style={styles.headerRow}>
            <h1 style={styles.logoText}>HelPaw</h1>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.burger}
              className="burger"
            >
              ☰
            </button>
          </div>

          <nav style={styles.nav} className="desktopNav">
            <a href="/" style={styles.navLink}>
              Головна
            </a>
            <a href="/news" style={styles.navLink}>
              Новини/блог
            </a>
            <a href="/search" style={styles.navLink}>
              Тварини
            </a>
            <a href="/shelters" style={styles.navLink}>
              Притулки
            </a>
            <a href="/volunteers" style={styles.navLink}>
              Волонтерам
            </a>
            <a href="/auth" style={styles.navLink}>
              Вхід/Реєстрація
            </a>
          </nav>

          {menuOpen && (
            <nav style={styles.mobileNav} className="mobileNav">
              <a
                href="/"
                style={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Головна
              </a>
              <a
                href="/news"
                style={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Новини/блог
              </a>
              <a
                href="/search"
                style={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Тварини
              </a>
              <a
                href="/shelters"
                style={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Притулки
              </a>
              <a
                href="/volunteers"
                style={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Волонтерам
              </a>
              <a
                href="/auth"
                style={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Вхід/Реєстрація
              </a>
            </nav>
          )}
        </header>

        <style>{`
          @media (max-width: 768px) {
            .burger {
              display: block !important;
            }

            .desktopNav {
              display: none !important;
            }
          }

          @media (min-width: 769px) {
            .mobileNav {
              display: none !important;
            }

            .burger {
              display: none !important;
            }

            .desktopNav {
              display: flex !important;
            }
          }
        `}</style>

        <section style={styles.section}>
          <div style={styles.searchBar}>
            <input
              type="text"
              placeholder="Київ, Львів..."
              style={styles.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              style={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Категорія</option>
              <option value="Собаки">Собаки</option>
              <option value="Коти">Коти</option>
            </select>
            <select
              style={styles.select}
              value={sortRating}
              onChange={(e) => setSortRating(e.target.value)}
            >
              <option value="">Рейтинг</option>
              <option value="desc">Найвищий</option>
              <option value="asc">Найнижчий</option>
            </select>
            <div style={styles.toggle}>
              <input
                type="checkbox"
                checked={hasRequestsOnly}
                onChange={() => setHasRequestsOnly(!hasRequestsOnly)}
              />
              <label>Відкриті запити</label>
            </div>
          </div>

          <h2>Рекомендовані притулки</h2>
          {shelters.filter((s) => s.recommended).length > 0 ? (
            shelters
              .filter((shelter) => shelter.recommended)
              .map((shelter) => (
                <div key={`rec-${shelter.id}`} style={styles.card}>
                  <div style={styles.cardLeft}>
                    <span style={{ fontSize: "2rem" }}>{shelter.logo}</span>
                    <span>{shelter.name}</span>
                  </div>
                  <div style={styles.cardLeft}>
                    <span style={styles.rating}>{shelter.rating}</span>
                    <span style={styles.stars}>★★★★★</span>
                    <a
                      href={`/shelter/${shelter.id}`}
                      style={styles.detailButton}
                    >
                      Детальніше
                    </a>
                  </div>
                </div>
              ))
          ) : (
            <p>Немає рекомендованих притулків</p>
          )}

          <h2>Результати пошуку</h2>
          {filteredShelters.length > 0 ? (
            filteredShelters.map((shelter) => (
              <div key={shelter.id} style={styles.card}>
                <div style={styles.cardLeft}>
                  <span style={{ fontSize: "2rem" }}>{shelter.logo}</span>
                  <span>{shelter.name}</span>
                </div>
                <div style={styles.cardLeft}>
                  <span style={styles.rating}>{shelter.rating}</span>
                  <span style={styles.stars}>★★★★★</span>
                  <a
                    href={`/shelter/${shelter.id}`}
                    style={styles.detailButton}
                  >
                    Детальніше
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>Нічого не знайдено</p>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ShelterRatings;
