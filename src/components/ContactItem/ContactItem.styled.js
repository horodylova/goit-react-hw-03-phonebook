import styled from '@emotion/styled';

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const ContactInfo = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;