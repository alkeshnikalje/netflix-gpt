import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToMyList, removeFromMyList } from "../user/userMoviesSlice";
export default function AddRemoveWithPopver({ movieId, movie }) {
  const dispatch = useDispatch();
  const myMovieList = useSelector((store) => store.myMovies.myMovieList);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const movieExists = myMovieList.find((movie) => movie?.id == movieId);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="absolute bottom-0 rounded-full p-1 left-0  bg-black bg-opacity-50 hover:bg-stone-600 transition-all duration-200">
      {!movieExists ? (
        <button onClick={() => dispatch(addMovieToMyList({ movieId, movie }))}>
          <AddOutlinedIcon
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            className="text-white"
          />
        </button>
      ) : (
        <button onClick={() => dispatch(removeFromMyList(movieId))}>
          <DoneOutlinedIcon
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            className="text-white"
          />
        </button>
      )}
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          {!movieExists ? "Add to my list" : "Remove from my list"}
        </Typography>
      </Popover>
    </div>
  );
}
