import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import React from 'react'
import Switch from '../screens/switch'
import Recruiter from '../screens/recruiter'
import Jobseeker from '../screens/jobseeker'
import Camera from '../screens/camera'
import Recruiterhome from '../screens/recruiterhome' 
import Jobdata from '../screens/jobdata'
import Responses from '../screens/responses'
import Successfullyposted from '../screens/successfullyposted'
import Recruitersection from '../screens/recruitersection'
import Recruitercamera from '../screens/recruitercamera'
import Aboutcompany from '../screens/aboutcompany'
import Aboutjobposition from '../screens/aboutjobposition' 
import Aboutmorejobposition from '../screens/aboutmorejobposition'
<<<<<<< HEAD
import Jobportal from '../screens/jobportal'
import Login from '../screens/login'
import Info from '../screens/jobseekerinfo'
import Logout from '../screens/jobseekerlogout'
import Applied from '../screens/jobseekerapplied'
=======
>>>>>>> e1ddaf41eb75ddfbf2042bdfa5061d9884ae179b


<<<<<<< HEAD
    Switch:{
        screen:Switch,
        navigationOptions:{
            header:() => false
=======
const screens={

    Switch:{
        screen:Switch,
        navigationOptions:{
            headerLeft:()=>(null),
            title:'Switch roles'
>>>>>>> e1ddaf41eb75ddfbf2042bdfa5061d9884ae179b
        }
    },
    
    Jobseeker:{
        screen:Jobseeker,
    },

    Aboutcompany:{
        screen:Aboutcompany,
        navigationOptions:{
            header:() => false
        },
    },

<<<<<<< HEAD
    Recruitercamera:{
        screen:Recruitercamera,
        navigationOptions:{
            header:()=>false
        }
    },

=======
>>>>>>> e1ddaf41eb75ddfbf2042bdfa5061d9884ae179b

    Aboutjobposition:{
        screen:Aboutjobposition,
        navigationOptions:{
            header:() => false
        }
    },

<<<<<<< HEAD

    Recruitersection:{
        screen:Recruitersection,
        navigationOptions:{
            headerTitle:'Recruiter Portal'
        }
    },

   Jobportal:{
       screen:Jobportal,
       navigationOptions:{
           headerTitle:'Job Portal'
       }
   },

   Applied:{
       screen:Applied
   },

   Info:{
       screen:Info
   },   
=======
    Recruitercamera:{
        screen:Recruitercamera,
        navigationOptions:{
            header:()=>false
        }
    },
    

   

   
>>>>>>> e1ddaf41eb75ddfbf2042bdfa5061d9884ae179b
   
    Aboutmorejobposition:{
        screen:Aboutmorejobposition,
        navigationOptions:{
            header:()=>false
        }
    },

    Recruiterhome:{
        screen:Recruiterhome
    },

<<<<<<< HEAD

    Successfullyposted:{
        screen:Successfullyposted,
=======
    Recruitersection:{
        screen:Recruitersection,
    },
   
    Jobseeker:{
        screen:Jobseeker,
>>>>>>> e1ddaf41eb75ddfbf2042bdfa5061d9884ae179b
        navigationOptions:{
            headerTitle:'Posted'
        }
    },

    Successfullyposted:{
        screen:Successfullyposted,
        navigationOptions:{
            headerTitle:'Posted'
        }
    },
    
   
    Responses:{
        screen:Responses
    },
   
    
    Responses:{
        screen:Responses
    },
    
    Jobdata:{
        screen:Jobdata,
        navigationOptions:{
            headerTitle:'Job challange',
        }
    },
   
   
    Recruiter:{
        screen:Recruiter,
        navigationOptions:{
            headerTitle:'Login'
        }
    },

<<<<<<< HEAD
    Login:{
        screen:Login
    },

=======
>>>>>>> e1ddaf41eb75ddfbf2042bdfa5061d9884ae179b

    camera:{
        screen:Camera,
        navigationOptions:{
            headerLeft: () => (null)
        }
    },

    Logout:{
        screen:Logout
    }
    

}

const homestack = createStackNavigator(screens)

const appContainer = createAppContainer(homestack)

export default appContainer
