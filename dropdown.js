(function() {
  class Dropdown extends HTMLElement {
    static get observedAttributes() {
      return ["open", "text-button"];
    }

    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      const button = document.createElement("button");
      button.innerText = this.getAttribute("text-button");
      this.button = button;

      this.button.addEventListener("click", e => {
        this.toggleDropdown();
      });
      const style = this.createStyle();

      const dropdownTemplateId = this.getAttribute("dropdown-template-id");

      const dropdownTemplate = document.getElementById(dropdownTemplateId);

      const dropdownNode = dropdownTemplate.content.cloneNode(true);

      wrapper.appendChild(button);
      wrapper.appendChild(dropdownNode);

      this.dropdownNode = wrapper.querySelector("ul");

      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }

    get open() {
      return this.hasAttribute("open");
    }

    set open(val) {
      if (val) {
        this.setAttribute("open", "");
      } else {
        this.removeAttribute("open");
      }
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case "open":
          if (newVal === "") {
            this.button.classList.add("active");
            this.dropdownNode.classList.add("show");
          } else {
            this.button.classList.remove("active");
            this.dropdownNode.classList.remove("show");
          }
          break;
        case "text-button":
          this.button.innerText = newVal;
          break;
        default:
          break;
      }
    }

    toggleDropdown() {
      this.open = !this.open;
    }

    toggleHandler() {}

    createStyle() {
      const style = document.createElement("style");

      style.textContent = `
        .wrapper {
          position: relative;
        }

        ul {
          position: absolute;
          right: 0;
          top: 48px;
          background-color: #efeeee;
          margin-top: 10px;
          min-width: 140px;
          padding: 12px;
          opacity: 0;
          transition: all 0.3s;
          list-style: none;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2), -2px -2px 8px rgba(255, 255, 255, 0.4);
        }

        ul.show {
          opacity: 1;
          display: block;
          width: auto;
        }

        li {
          padding: 6px 0px;
          position: relative;
          min-height: 34px;
          display: flex;
          align-items: center;
        }

        li a {
          color: maroon;
        }

        li:not(:last-child):after {
          position: absolute;
          top: 100%;
          content: "";
          width: 100%;
          height: 1px;
          display: block;
          border-radius: 2px;
          background: maroon;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.4);
        }

        button {
          background-color: #efeeee;
          color: maroon;
          height: 48px;
          padding: 0 24px;
          border-radius: 2px;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2),  -2px -2px 8px rgba(255, 255, 255, 0.4);
          position: relative; 
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
          outline: none;
          font-size: 14px;
          font-weight: bold;
        }

        button.active {
          box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.2),  inset -2px -2px 8px rgba(255, 255, 255, 0.4);
          color: #efeeee;
          background-color: maroon;
        }
      `;

      return style;
    }
  }

  customElements.define("my-dropdown", Dropdown);
})();
