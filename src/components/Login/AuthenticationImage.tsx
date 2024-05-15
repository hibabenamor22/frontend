import React, { useState } from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from './AuthenticationImage.module.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export function AuthenticationImage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      // Navigate to home page if email and password are filled
      window.location.href = 'http://localhost:3030/';
    } else {
      alert('Please fill in both email and password fields');
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />

        <form onSubmit={handleLogin}>
          <Button type="submit" fullWidth mt="xl" size="md">
            Login
          </Button>
        </form>

        <Text ta="center" mt="md">
          Don't have an account?{' '}
          <Link to="/register" className={classes.registerLink}>
            Register
          </Link>
        </Text>
      </Paper>
    </div>
  );
}
