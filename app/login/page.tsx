// import Image from "next/image";
import "./style.css";

import { SignIn } from "../../components/SignIn/SignIn.jsx";
export default function LoginPage() {
  return (
    <div className="index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="BG">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
            </div>
            <img className="vector" alt="Vector" src="/bg.svg" />
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
}
