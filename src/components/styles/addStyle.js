import styled from "styled-components";

const AddWrapper = styled.div`
    max-width: 500px;
    margin: 20px auto;
    column-count: 2;
    column-gap: 5px;
`
const AddLabel = styled.label`
    cursor: pointer;
    display: block;
`
const AddCheckbox = styled.input`
    cursor: pointer;
    margin: 5px;
`

export { AddWrapper, AddLabel, AddCheckbox }