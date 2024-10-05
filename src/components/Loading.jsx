import { MutatingDots } from "react-loader-spinner"; // Make sure to import MutatingDots

const Loading = () => {
  return (
    <div style={styles.container}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
  },
};

export default Loading;
