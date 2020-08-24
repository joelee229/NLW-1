import React from 'react';

interface HeaderProps {
    title: string;
}

// React.FC significa Function Component, uma variável em formato de função
// É melhor para gerenciar props de componentes maiores, principalmente no typescript
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <h1>{props.title}</h1>
    );
}

export default Header;