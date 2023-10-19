const Styles = () => {
    const colorBlack = { color: "black" };
    const padding10px = { padding: "10px" };
    const bgBlue = {
      "backgroundColor": "lightblue",
      "color": "black",
      ...padding10px
    };
    const bgRed = {
      "backgroundColor": "lightcoral",
      ...colorBlack,
      ...padding10px
    };
    return(
      <div>
        <h2>Styles</h2>
        <div style={{ "backgroundColor": "lightyellow",
          "color": "black", padding: "10px" }}>
          Yellow background by hand</div>
        <div style={ bgRed }> Red background with style </div>
        <div style={ bgBlue }>Blue background with style</div>
      </div>
    );
   };
   export default Styles;