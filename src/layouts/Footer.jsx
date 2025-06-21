import React from "react";
import "../../public/css/footer.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Created with <FaHeart className="heart-icon" /> ~ By <strong>Anirban Sen</strong>
      </p>
    </footer>
  );
}

export default Footer;
