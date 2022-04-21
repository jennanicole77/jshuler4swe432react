import React, {useMemo, useState, useCallback} from 'react';

export default function App(props) {
    let res = null;
    fetch('https://jshuler4swe432.herokuapp.com/assignment8')
    .then(response => response.text())
    .then(data => {
            res = data;
            document.write(res);
    });
}
