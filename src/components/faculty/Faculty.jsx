import React from "react";
import "./Faculty.css";
import { AspectRatio, Box, Card, Typography } from "@mui/joy";
import faculty1 from '../../assets/images/faculty1.png';
import faculty2 from '../../assets/images/faculty2.png';
import faculty3 from '../../assets/images/faculty3.png';
import faculty4 from '../../assets/images/faculty4.png';
// import faculty5 from '../../assets/images/faculty5.png';
import Data from '../../Data.json'; // Import your JSON file

function Faculty() {
  const facultyImages = [faculty1, faculty2, faculty3, faculty4];

  return (
    <div
      style={{ backgroundColor: "#FBFBFB" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      {Data.cat.map((items, index) => (
        <React.Fragment key={index}>
          <div className="header-container mt-3 d-flex justify-content-center align-items-center">
            <span className="text-left fw-bold">{items.Ourfacultymembers.heading.span1}</span>
            <span className="text-right fw-bold">{items.Ourfacultymembers.heading.span2}</span>
          </div>
          <div className="d-flex w-75 justify-content-center align-items-center my-5 shadow p-4 rounded">
            <Box
              sx={{
                display: "flex",
                gap: 1,
                py: 1,
                overflow: "auto",
                width: 1100,
                height: 350,
                scrollSnapType: "x mandatory",
                "& > *": {
                  scrollSnapAlign: "center",
                },
                "::-webkit-scrollbar": { display: "none" },
              }}
            >
              {facultyImages.map((imgSrc, idx) => (
                <Card
                  orientation="vertical"
                  size="lg"
                  key={idx}
                  variant="outlined"
                >
                  <AspectRatio ratio="1" sx={{ minWidth: 240 }}>
                    <img
                      width="100%"
                      height="350px"
                      src={imgSrc} // Use the image from array
                      alt={`Faculty ${idx + 1}`}
                      style={{ background: "#FD661F" }}
                    />
                  </AspectRatio>
                  <Box>
                    {/* Display the titles and descriptions dynamically */}
                    <Typography level="title-md">
                      {items.Ourfacultymembers.imagetitle[`title${idx + 1}`]}
                    </Typography>
                    <Typography level="body-md">
                      {items.Ourfacultymembers.imagediscription[`description${idx + 1}`]}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Faculty;
