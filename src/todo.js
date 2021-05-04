import React from 'react';
import './Todo.css';
import { List,ListItem,ListItemText,ListItemAvatar,Avatar,ImageIcon,Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
import { DeleteForeverRounded } from '@material-ui/icons';

function todo(props) {
    //const 
    return (
            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Todo...' secondary={props.todo.todo}/>
                </ListItem>
                <DeleteForeverIcon onClick ={event => db.collection('todos').doc(props.todo.id).delete()} variant="contained" color="secondary"></DeleteForeverIcon>
            </List>
    )
}

export default todo;
//rfce