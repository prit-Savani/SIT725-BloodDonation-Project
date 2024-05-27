import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

// add data to the admin page
const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a quam tortor. Phasellus nec elit dolor. Integer ullamcorper sapien id tincidunt sodales. Nam luctus, lectus ac sodales aliquet, massa lectus tristique leo, vitae imperdiet nibh nisl et lorem. Proin felis erat, facilisis eu placerat ac, accumsan mattis massa. Aliquam ipsum odio, molestie sit amet ipsum sed, tristique iaculis metus. Nullam malesuada mollis porttitor. Fusce ornare efficitur hendrerit. Etiam lobortis, ante ut laoreet hendrerit, enim metus dapibus nulla, nec luctus enim libero ullamcorper sem. Mauris cursus tempus ante vel ornare. Proin eros leo, vehicula sed nulla vitae, rhoncus luctus enim. Nam sed mi tempus, posuere ipsum vitae, blandit dolor. Phasellus lacus quam, dignissim vitae magna faucibus, tristique accumsan nunc. Donec eget sem non mauris dictum tempor. Vivamus sem nulla, sodales et pulvinar sit amet, hendrerit vel est.

Morbi rhoncus ligula consectetur nisi tincidunt bibendum. Vestibulum vestibulum dui quis arcu varius scelerisque. Praesent justo dolor, posuere eu libero non, elementum mollis velit. Proin eu sapien a turpis blandit auctor quis nec nisi. Ut posuere eu felis a tincidunt. Aliquam et tempus purus. Nam ac orci a odio efficitur dictum rutrum at libero. Donec laoreet mattis eros, nec pharetra sem cursus consequat. Pellentesque ante urna, tincidunt sed quam non, consectetur suscipit arcu. Aenean enim odio, bibendum vel nunc sit amet, rutrum maximus lacus. Mauris efficitur egestas mi, ac pretium lacus faucibus at. Quisque at dui a ipsum laoreet vestibulum id ac ipsum. Proin sollicitudin luctus dignissim. Morbi sed orci vulputate, pretium dolor at, sollicitudin velit. Nulla sit amet mi erat. Quisque vitae dui lorem.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
