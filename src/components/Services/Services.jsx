import React,{useEffect} from "react";
import styles from "./Services.module.css";
function Services() {
  const tg = window.Telegram.WebApp;
  useEffect(() => {
      tg.BackButton.show();
      tg.BackButton.onClick(() => {
        window.history.back();
      });
      
      return () => {
        tg.BackButton.hide();
      };
    }, tg.BackButton]);
  return (
    <div
      className="Services"
      style={{
        width: "100%",
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div className={styles.container}>
        <div
          className={styles.main}
          style={{ marginTop: "16px", marginBottom: "25px" }}
        >
          <div className={styles.label} style={{ marginBottom: "8px" }}>
            <h2>Услуги</h2>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.search}>
              <img src="/Search.png" alt="" className={styles.searchImg} />
              <input
                type="text"
                placeholder="Найти..."
                className={styles.searchInput}
              />
            </div>
            <img src="/Filter.png" alt="" className={styles.searchFilter} />
          </div>
          <div
            className={styles.navigate}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              e.currentTarget.dataset.startX = touch.clientX;
              e.currentTarget.dataset.startScrollLeft =
                e.currentTarget.scrollLeft;
            }}
            onTouchMove={(e) => {
              if (!e.currentTarget.dataset.startX) return;
              const touch = e.touches[0];
              const startX = parseFloat(e.currentTarget.dataset.startX);
              const walk = (startX - touch.clientX) * 1.5;
              e.currentTarget.scrollLeft =
                parseFloat(e.currentTarget.dataset.startScrollLeft) + walk;
            }}
            onTouchEnd={(e) => {
              delete e.currentTarget.dataset.startX;
              delete e.currentTarget.dataset.startScrollLeft;
            }}
          >
            <button>Предложения вязки</button>
            <button>Покупка/Продажа</button>
            <button>Щенки</button>
            <button>Щенки</button>
          </div>
          <div className={styles.elementsContainer}>
            <div className={styles.elements}>
              <div className={styles.element}>
                <div className={styles.card}>
                  <img src="/dog.png" alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>4,9</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}> 1000₽</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
              <div className={styles.element}>
                <div className={styles.card}>
                  <img src="/dog.png" alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>4,9</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}> 1000₽</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
              <div className={styles.element}>
                <div className={styles.card}>
                  <img src="/dog.png" alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>4,9</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}> 1000₽</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
              <div className={styles.element}>
                <div className={styles.card}>
                  <img src="/dog.png" alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>4,9</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}> 1000₽</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
              <div className={styles.element}>
                <div className={styles.card}>
                  <img src="/dog.png" alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>4,9</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}> 1000₽</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
              <div className={styles.element}>
                <div className={styles.card}>
                  <img src="/dog.png" alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>4,9</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}> 1000₽</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              {" "}
              <img src="/home.png" alt="" className={styles.home} />
              <img src="/people.png" alt="" className={styles.people} />
              <img src="/Message=No.png" alt="" className={styles.MessageNo} />
              <img src="/Counter=No.png" alt="" className={styles.CounterNo} />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default Services;
