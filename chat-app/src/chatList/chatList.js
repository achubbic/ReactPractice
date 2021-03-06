import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import NotificationImportant from '@material-ui/icons/NotificationImportant';

class ChatListComponent extends React.Component {

    render() {

        const { classes } = this.props;

        if(this.props.chats.length > 0) {
            return(
                <div>
                    <main className={classes.root}>
                        <Button variant='contained' fullWidth color='primary' className={classes.newChatBtn} onClick={this.newChat}>
                            New Message1
                        </Button>
                        <List>
                            {
                                //return list items depending on what chat we're looking at
                                this.props.chats.map((_chat, _index) => {
                                    return(
                                        // must give key bc be iterate through this
                                        <div key={_index}>
                                            <ListItem onClick={() => this.selectChat(_index)} className={classes.listIten} selected={this.props.selectedChatIndex === _index} alignItems='flex-start'>
                                                {/* set profile pic to first letter of name */}
                                                <ListItemAvatar>
                                                    <Avatar alt='Remy Sharp'>  
                                                        {/* 0th index = person talk to, split('') means break into array of one char elements */}
                                                        {_chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0]}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={_chat.users.filter(_user => _user !== this.props.userEmail)[0]} secondary={
                                                    <React.Fragment>
                                                        <Typography component='span' color='textPrimary'>
                                                            {
                                                                //display first 30 chars of last chat message
                                                                _chat.messages[_chat.messages.length - 1].message.substring(0,30)
                                                            }
                                                        </Typography>
                                                    </React.Fragment>
                                                }>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider></Divider>
                                        </div>
                                    )
                                })
                            }
                        </List>
                    </main>
                </div>
            );
        }
        else{
            return(
                <main className={classes.root}>
                <Button variant='contained' fullWidth onClick={this.newChat} className={classes.newChatBtn} color='primary'>
                    New Message2
                </Button>
                <List></List>
                </main>
            );
        }
            
    }

    newChat = () => {
        console.log('new chat click');
    }

    selectChat = (index) => {
        this.props.selectChatFn(index)
        console.log('select chat', index);
    }
}

export default withStyles(styles)(ChatListComponent);