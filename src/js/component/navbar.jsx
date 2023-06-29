import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { store, actions } = useContext(Context);
  // En la propiedad location.pathname nos dice en que ruta nos encontamos acutalemnte

  return (
    <nav className=" flex place-items-center h-[70px] btm-nav bg-secondary">
      <Link to="/" className="flex-col">
        <button>
          <Icon width={28} color="#265a7d" icon="material-symbols:home" />
        </button>
        <span className="btm-nav-label text-base">Inicio</span>
      </Link>

      <Link to="/chat">
        <button>
          <Icon width={28} color="#265a7d" icon="fluent:chat-12-filled" />
        </button>
        <span className="btm-nav-label text-base">Chat</span>
      </Link>

      {/* Como hago para que se aplique un estilo en línea display:none solamente cuando  location.pathname vale '/newdonation'*/}

      <div
        onClick={() => navigate("/newdonation")}
        className={`static ${
          location.pathname.includes("newdonation") ? "hidden" : ""
        }`}
      >
        <button className="btn bg-primary btn-circle basis-12 absolute w-[72px] h-[72px] bottom-8 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#57cc99"
            height="1.5em"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>

      <Link to="/myDonations">
        <button>
          <Icon width={28} color="#265a7d" icon="mdi:present" />
        </button>
        <span className="btm-nav-label text-base">Donaciones</span>
      </Link>
      <Link className="flex flex-col" to="/profile">
        {store.user ? (
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={store.user.avatar_url} />
            </div>
          </div>
        ) : (
          <Icon width={33} color="#265a7d" icon="iconamoon:profile-fill" />
        )}
        <span className="btm-nav-label text-base">Perfil</span>
      </Link>
    </nav>
  );
};
