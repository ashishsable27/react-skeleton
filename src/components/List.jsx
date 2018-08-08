var React=require('react');

var ListItem=require('./ListItem.jsx');

var ingredients=[{"id":1,"text":"ashish"},{"id":2,"text":"sable"},{"id":3,"text":"Pune"}];

var List=React.createClass({
    render:function(){
        var listitems=ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text}/>;
        });

      return (<ul>{listitems}</ul>);
    }

});

module.exports=List;
