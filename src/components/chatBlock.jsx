const ChatBlock = (props) => {
    return(
        <div>
            <h1>Чат</h1>
{props.chatData.map((el, i) => {
    return(
        <div key={i}>
            {i + 1}. {el}
        </div>
    )
})}
        </div>
    );
};

export default ChatBlock