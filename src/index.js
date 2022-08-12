import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/app/";

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 25,
//     };
//     // this.nextYear = this.nextYear.bind(this);
//   }

//   nextYear = () => {
//     this.setState((state) => ({
//       years: ++state.years,
//     }));
//   };

//   // nextYear() {
//   //   // this.state.years++;
//   //   this.setState((state) => ({
//   //     years: ++state.years,
//   //   }));
//   // }
//   render() {
//     const { name, surname, link } = this.props;
//     const { years } = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>
//           My name is {name}, surname - {surname}, years {years}
//         </h1>
//         <a href={link} target="_blank">
//           My profile
//         </a>
//       </>
//     );
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="Denys" surname="Khrapov" link="facebook.com" />
//       <WhoAmI name="Roma" surname="Kapitanov" link="facebook.com" />
//       <WhoAmI name="Alex" surname="Shapovalov" link="facebook.com" />
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
