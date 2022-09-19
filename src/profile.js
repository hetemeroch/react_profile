import propTypes from 'prop-types'

const Profile = (props) => {

return(
        <div>
                     
             <div>
                <p>{props.tab.fulname}</p>
                <p>{props.tab.profession}</p>
                <p>{props.tab.telephone}</p>
                <p>{props.children}</p>
                <button onClick = {props.texte}>test</button>
            </div>    
                
            
        </div>

      
    )
}
  Profile.propTypes = {
    tab : propTypes.object
  }
  Profile.defaultProps = {
    tab : {
        fulname : "----",
        profession : "----",
        telephone : "00000000"
    }
  }

export default Profile