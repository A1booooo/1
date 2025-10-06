import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function MemoListItem({ id, title, content, deleteMemo }) {
  const processedMemoContent =
    content.length > 40
      ? content.split(" ").slice(0, 10).join(" ") + "..."
      : content;
  const navigate = useNavigate();
  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(event) => {deleteMemo(id)
              event.stopPropagation()
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        onClick={() => navigate(`memo/${id}`)}
      >
        <ListItemText
          primary={title}
          secondary={<React.Fragment>{processedMemoContent}</React.Fragment>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}
