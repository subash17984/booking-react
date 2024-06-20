const Roommoredetails = (props) => {
    return (
      <>
        {props.show ? (
          <>
            <div
              className="row"
              style={{
                height: "50px",
                paddingTop: "50px",
                marginBottom: "30px",
              }}
            >
              <div
                className="col"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "10px",
                }}
              >
                <h1
                  style={{
                    fontWeight: "lighter",
                    marginTop: "20px",
                    marginLeft: "10px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  This impressive paella is a perfect .if you like.
                </h1>
              </div>
            </div>
            <div
              className="row"
              style={{
                height: "50px",
                paddingTop: "50px",
                marginBottom: "30px",
              }}
            >
              <div
                className="col"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "10px",
                }}
              >
                <h1
                  style={{
                    fontWeight: "lighter",
                    marginTop: "20px",
                    marginLeft: "10px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  This impressive paella is a perfect .if you like.
                </h1>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
}

export default Roommoredetails
