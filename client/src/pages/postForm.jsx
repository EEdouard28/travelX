import { React, useState } from 'react';
import axios from 'axios';
import { Images } from '../components/images/Images';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// Upload photo
// add description
// add location - country city
// upload image
// date
// comments
// reactions
const [images, setImages] = useState([]);
const fetchAPI = async () => {
  const response = await axios.get(
    'https://api.unsplash.com/photos/?client_id=Ow4cBXa2ga24IZ6IaLXjoz7xTG35jsPyRhxzkl8xJ7E'
  );
  console.log(response.data);
  const data = await response.data;
  setImages(data);
};
// Image files goes here
const itemData = [
  {
    img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Breakfast',
  },
];

const PostForm = () => {
  return (
    <>
      <CssBaseline />
      <Grid container>
        {/* Image list  */}
        <ImageList
          sx={{
            width: 500,
            height: 500,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={fetchAPI}
              />
            </ImageListItem>
          ))}
          <div className="photos">
            {images.length > 0 && <Images images={iamges} />}
          </div>
        </ImageList>
      </Grid>

      {/* Input Form */}
      <FormControl sx={{ width: '25ch' }}>
        <TextField id="standard-basic" label="Title" variant="standard" />
        <TextField id="standard-basic" label="Country" variant="standard" />
        <TextField id="standard-basic" label="City" variant="standard" />
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 1,
              width: '30ch',
            },
            display: 'flex',

            justifyContent: 'center',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ p: 0.5 }}
            id="outlined-multiline-static"
            label="Body"
            multiline
            rows={4}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default PostForm;
