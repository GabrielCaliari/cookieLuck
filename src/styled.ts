import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const TextPhrase = styled.Text`
  font-size: 20px;
  color: #dd7b22;
  margin: 30px;
  font-style: italic;
  text-align: center;
  background-color: #c0c0c0;
  border-radius: 5px;
`;

export const ButtonTO = styled.TouchableOpacity`
  width: 230px;
  height: 50px;
  border-width: 2px;
  border-color: #dd7b22;
  border-radius: 25px;
`;

export const BtnArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #dd7b22;
`;
