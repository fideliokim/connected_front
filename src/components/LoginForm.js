import React from 'react';
import Alert from '@enact/sandstone/Alert';
import Button from '@enact/sandstone/Button';
import Input from '@enact/sandstone/Input';
import $L from '@enact/i18n/$L';

const LoginForm = ({ open, onClose, onSignup }) => {
    return (
        <Alert type="overlay" open={open} onClose={onClose}>
            <h2>{$L('로그인')}</h2>
            <Input placeholder={$L('아이디')} />
            <Input type="password" placeholder={$L('비밀번호')} />
            <buttons>
                <Button size="small" onClick={onClose}>
                    {$L('로그인')}
                </Button>
                <Button size="small" onClick={onSignup}>
                    {$L('회원가입')}
                </Button>
                <Button size="small" onClick={onClose}>
                    {$L('닫기')}
                </Button>
            </buttons>
        </Alert>
    );
};

export default LoginForm;
