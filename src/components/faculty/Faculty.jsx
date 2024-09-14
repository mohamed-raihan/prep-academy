import React from "react";
import "./Faculty.css";
import { AspectRatio, Box, Card, Typography } from "@mui/joy";
import faculty1 from '../../assets/images/faculty1.png'
import faculty2 from '../../assets/images/faculty2.png'
import faculty3 from '../../assets/images/faculty3.png'
import faculty4 from '../../assets/images/faculty4.png'
// import faculty5 from '../../assets/images/faculty5.png'



function Faculty() {

    const data = [
        {
          src: faculty1,
          title: 'Night view',
          description: '4.21M views',
        },
        {
          src: faculty2,
          title: 'Lake view',
          description: '4.74M views',
        },
        {
          src: faculty3,
          title: 'Mountain view',
          description: '3.98M views',
        },
        {
            src: faculty4,
            title: 'Mountain view',
            description: '3.98M views',
        },
        {
            src: faculty1,
            title: 'Mountain view',
            description: '3.98M views',
        }
      ];

  return (
    <div
      style={{ backgroundColor: "#FBFBFB" }}
      className="d-flex flex-column justify-content-center  align-items-center"
    >
      <div className="header-container mt-3 d-flex justify-content-center  align-items-center">
        <span className="text-left fw-bold">Our Faculty</span>
        <span className="text-right fw-bold">Members</span>
      </div>
      <div className="d-flex w-75 justify-content-center  align-items-center my-5 shadow p-4 rounded">
        <Box
          sx={{
            display: "flex",
            gap: 1,
            py: 1,
            overflow: "auto",
            width: 1100,
            height:250,
            scrollSnapType: "x mandatory",
            "& > *": {
              scrollSnapAlign: "center",
            },
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {data.map((item) => (
            <Card
              orientation="horizontal"
              size="lg"
              key={item.title}
              variant="outlined"
            >
              <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
                <img
                    width={'100%'}
                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.src}?h=120&fit=crop&auto=format`}
                  alt={item.title}
                />
              </AspectRatio>
              
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default Faculty;
