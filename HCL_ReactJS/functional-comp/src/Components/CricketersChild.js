import React from 'react'

export const CricketersChild = (props) => {
  return (
    <div>
        <table border="5px">
            <tr><th>Cricketr</th><th>Score</th></tr>
            <tbody>
            {props.list.map((c)=>{
                return (
                            <tr key={c.name}>
                                <td>{c.name}</td>
                                <td>{c.score}</td>
                            </tr>
                        );
            })}
            </tbody>
        </table>
    </div>
  )
}
