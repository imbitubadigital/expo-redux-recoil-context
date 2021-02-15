import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 10px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Btn = styled.TouchableOpacity`
    padding: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: blue;
    width: 200px;
`;

export const BtnTxt = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const Label = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LabelTxt = styled.Text`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;