import * as React from 'react';;
import Navigator from './HomeStack'

export default function App(){
  return(
    <Navigator 
      screenOptions={{
        headerShown: false
      }}
     />
  );
}