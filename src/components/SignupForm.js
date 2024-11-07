import React from 'react';
import Alert from '@enact/sandstone/Alert';
import Button from '@enact/sandstone/Button';
import Input from '@enact/sandstone/Input';
import $L from '@enact/i18n/$L';

const SignupForm = ({ open, onClose }) => {
    return (
        <Alert type="overlay" open={open} onClose={onClose}>
            <h2>{$L('회원가입')}</h2>
            <Input placeholder={$L('아이디')} />
            <Input type="password" placeholder={$L('비밀번호')} />
            <Input placeholder={$L('이메일')} />
            <buttons>
                <Button size="small" onClick={onClose}>
                    {$L('회원가입')}
                </Button>
                <Button size="small" onClick={onClose}>
                    {$L('닫기')}
                </Button>
            </buttons>
        </Alert>
    );
};

export default SignupForm;
