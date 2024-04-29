import Footer from "../../components/footer";
import ResponsiveAppBar from "../../components/nav";
import Homepage from "../../components/home";


export default function Page() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>

  );
}
