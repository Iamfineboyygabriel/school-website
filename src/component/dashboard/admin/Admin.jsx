import React, { useState } from "react";
import styles from "./admin.module.scss";
import AllStudent from "./AllStudent";
import Logout from "../../../assets/svg/logout.svg";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import ReactLoading from "react-loading";

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("allStudents");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      navigate("/admin-login");
    }, 1000);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.parentchild}>
        <div className={styles.buttons}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos voluptate deserunt iusto quos adipisci quae. Deleniti ullam facere quasi, veritatis a libero praesentium dolore minus voluptatibus perspiciatis maiores quod ipsam nobis? Eius, blanditiis. Porro, totam? Quasi non quaerat itaque at. Perferendis perspiciatis dolorem, nam consequuntur necessitatibus sit molestiae ab dolor quasi dignissimos facere, voluptate vitae error facilis eaque eveniet ipsam at eos, earum ad modi a labore numquam aut! Obcaecati fugit voluptate cum provident ipsum! Ipsam, explicabo esse. Laboriosam, repellat. Eum sed nesciunt, dolore optio molestiae delectus eius perspiciatis! Sit, veniam nihil! Sapiente tempora quaerat dolorum dignissimos aliquid voluptatibus ratione culpa molestias ipsum laudantium aut nobis beatae voluptate aliquam iure, numquam rerum enim quidem magnam expedita odio? Nisi, vel consectetur non quidem aliquam optio modi delectus cum inventore corporis natus perspiciatis libero tempora iste ab ratione in dignissimos fugit tempore. Quo unde iste adipisci, quos aliquam omnis vitae eveniet. Magni nam vel qui, provident soluta autem a aspernatur adipisci neque recusandae rerum illo rem odit! Non voluptatem nostrum itaque officiis repellendus corrupti quibusdam perferendis optio magnam ex. Perferendis, itaque. Similique maxime, aperiam a velit eum voluptas ab esse quos voluptatibus ipsum, nulla ipsa cum fugit eius quo debitis fugiat! Maiores rerum tenetur voluptate voluptates cupiditate at debitis velit perferendis incidunt ipsam, molestiae voluptatibus dignissimos ex cumque! Tenetur at nam doloremque corrupti placeat, vero ipsum voluptate a blanditiis, quasi, vel magni id nihil pariatur quos assumenda minima dolorem obcaecati sint eos molestiae voluptates? Corrupti laudantium vel architecto minus veniam repellendus dolore amet? Dicta natus iure accusamus error quidem! Harum placeat, reiciendis voluptatum doloribus aperiam ducimus a suscipit amet repudiandae maiores cum velit in dolorem, deserunt ratione consectetur sequi praesentium illo beatae hic sunt? Id ad praesentium quas, necessitatibus perspiciatis dignissimos consectetur fugiat tempore optio nesciunt et quasi natus suscipit. Magni quo libero natus dolorum! Eaque quam quae voluptate laboriosam vitae quo blanditiis dicta doloribus sunt, quis, animi doloremque repellendus quibusdam accusantium autem dolor totam molestias. Animi, consectetur nam saepe minima natus quae in molestiae dicta sint mollitia. Laudantium consectetur nesciunt quidem, qui temporibus exercitationem debitis perspiciatis eveniet molestias, fugiat, in dolorem earum. Temporibus nulla odit tempore omnis, repellat aperiam est rem ad quas reprehenderit corporis quasi a dolorem eaque pariatur nihil accusantium amet, rerum obcaecati fugiat! Accusamus cupiditate delectus vel! Enim, inventore dolores? Animi, quis ad dicta sit iure sint reprehenderit, earum tempora perferendis repellendus aliquam aperiam optio numquam atque, blanditiis nesciunt id beatae minima consequuntur ducimus commodi nisi harum eveniet pariatur? Sunt voluptas delectus sint blanditiis eaque nostrum mollitia necessitatibus id sapiente fugiat veritatis eius atque nihil excepturi inventore, debitis labore non vitae eligendi similique nisi, possimus quis laboriosam accusantium. Voluptatum atque hic fugiat fuga temporibus placeat. Consectetur perspiciatis totam eveniet labore nihil nostrum debitis id, ea magnam natus. Omnis quis neque reprehenderit facilis itaque numquam similique cum vitae, asperiores atque dicta dolore velit nesciunt sint temporibus quidem vel incidunt ad? Inventore, velit odit quisquam repudiandae consequuntur pariatur magnam possimus praesentium excepturi suscipit aliquam qui quae, veritatis, ipsum quam quo provident? Voluptatum sint facilis nemo quo aut minus soluta necessitatibus. Accusantium, eum facilis. Et, expedita officiis in est saepe inventore architecto fugit sequi cum ullam laborum molestiae voluptas. Eius maxime quae minima, molestiae at aut necessitatibus dolorem dolor dolore blanditiis, consequatur vitae incidunt amet, voluptates cumque? Expedita praesentium magni tenetur dolorum ex eligendi commodi vero ullam. Voluptas saepe accusamus, aut eum laudantium ullam, nulla accusantium illo iure dicta voluptate excepturi praesentium, molestias dolores iusto nihil deleniti eveniet fuga esse soluta harum ratione commodi veniam necessitatibus? Provident repudiandae earum vitae in odit placeat dolor sit id sint? Iusto inventore voluptas nisi, facere earum ipsum obcaecati nesciunt? Sapiente rerum aperiam quae nostrum doloremque dignissimos deserunt hic magni? Sunt dicta, facere esse neque nulla repellendus molestiae rerum libero sequi corrupti debitis fugiat perferendis asperiores. Maiores illo voluptates repellat fuga doloremque natus quasi, necessitatibus sint accusantium voluptatum dolor neque, alias provident impedit non dolorem fugit soluta ab. Neque sint rerum, nostrum expedita odio quasi saepe voluptas quos sequi ut architecto enim dolorem, eum illum voluptatum numquam exercitationem? Assumenda reiciendis perspiciatis quod earum quas impedit, pariatur ullam quaerat voluptate vitae recusandae quae ratione cumque, corrupti id veritatis. Sed, sunt rem, ex tenetur excepturi odio sapiente nesciunt eum vero id hic veritatis animi dolorem magni assumenda perspiciatis! Eum doloremque, aliquam, recusandae ab necessitatibus hic aliquid, facilis quam facere enim atque soluta? Cum doloribus deleniti beatae architecto reprehenderit, culpa magnam distinctio, quibusdam delectus, molestias laborum quam mollitia vel enim eos. Minima asperiores cumque, perspiciatis fuga et soluta dolor vero rerum nostrum odio repellendus fugit earum nesciunt quidem nisi quisquam ipsa sint tenetur temporibus unde, voluptas praesentium cupiditate? Aliquid expedita perspiciatis, voluptate et vitae nisi aperiam corporis eveniet error porro dolores beatae dolorum earum, sint libero nemo numquam laudantium distinctio sit magni at rerum commodi? Quasi odio atque omnis distinctio odit quibusdam, eligendi eius nesciunt veritatis dolorem nemo est eaque a. Necessitatibus blanditiis culpa alias aperiam laboriosam aut tempore ratione dolores illo voluptatibus explicabo quia ab deleniti temporibus nam, atque inventore ullam debitis officiis commodi omnis. Pariatur nobis necessitatibus accusamus iste nemo dicta doloribus voluptate, sed recusandae ut non commodi possimus, at quisquam, dolorem eaque sunt? Quam alias qui quo odio! Nemo eos et unde incidunt necessitatibus ipsum ut, quis assumenda fuga id eveniet aperiam beatae ducimus nam distinctio suscipit impedit qui deserunt eligendi quod? Illum iusto quaerat earum similique harum assumenda enim fuga ipsam impedit ducimus! Ea, id? Nobis odit error aspernatur vel quo delectus est doloremque? Molestias quisquam fuga iusto est? Cumque perferendis perspiciatis delectus saepe ducimus nostrum laudantium, corrupti quod aut, inventore error. Nostrum itaque, consequuntur non provident tempora ab nam dignissimos, distinctio laboriosam, fugit veritatis. Vel voluptas iste sunt expedita laudantium excepturi nemo deleniti inventore totam autem consequatur consectetur unde, fuga fugit tempore ipsum at officiis sit blanditiis nulla possimus in nihil. Magnam impedit earum reiciendis voluptas quo temporibus nesciunt vero molestiae quod, saepe nihil laudantium provident architecto ad expedita consequatur. Eveniet excepturi odio perspiciatis quisquam molestias quaerat ratione laboriosam minus vel? Natus?
          <button
            className={activeTab === "allStudents" ? styles.activeButton : ""}
            onClick={() => handleTabChange("allStudents")}
          >
            Admission
          </button>

          <Link
            to="/add-subject"
            className={activeTab === "add-subject" ? styles.activeButton : ""}
          >
            <button>Add Subject</button>
          </Link>

          <Link
            to="/upload-lesson"
            className={activeTab === "upload-lesson" ? styles.activeButton : ""}
          >
            <button>Upload Lesson</button>
          </Link>

          <Link
            to="/class-subjects"
            className={
              activeTab === "class-subjects" ? styles.activeButton : ""
            }
            style={{ marginLeft: "1em" }}
          >
            <button> view subjects</button>
          </Link>

          <Link
            to="/add-lesson"
            className={
              activeTab === "class-subjects" ? styles.activeButton : ""
            }
            style={{ marginLeft: "1em" }}
          >
            <button>Add Lesson</button>
          </Link>

          <Link
            to="/all-lesson"
            className={activeTab === "all-lesson" ? styles.activeButton : ""}
            style={{ marginLeft: "1em" }}
          >
            <button>All Lesson</button>
          </Link>

          <button className={styles.log} onClick={handleLogout}>
            {loading ? (
              <ReactLoading
                color="#064e3b"
                width={25}
                height={25}
                type="spin"
              />
            ) : (
              <Link to="/">
                <div className={styles.iconpagename}>
                  <img src={Logout} className={styles.icon} alt="horse" />
                  <div
                    style={{ color: "white", fontFamily: "sans-serif" }}
                    className={styles.pageName}
                  >
                    LogOut
                  </div>
                </div>
              </Link>
            )}
          </button>
        </div>
        <div className={styles.content}>
          {activeTab === "allStudents" ? (
            <AllStudent
              showModal={showModal}
              handleModalOpen={handleModalOpen}
              closeModal={closeModal}
              selectedUser={selectedUser}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
