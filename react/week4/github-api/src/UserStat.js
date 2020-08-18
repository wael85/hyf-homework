const { useState } = require("react")

import React, {useContext, createContext}from 'react'
export default function UserStat(){
    const stats = {
        statUser : '',
        statErorr : '',
        statArrayOfUsers : []
    }
    const myStat = createContext(stats);
}