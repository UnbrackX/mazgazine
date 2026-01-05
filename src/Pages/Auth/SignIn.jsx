import { useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { loginUser, loginWithGoogle } from "../../firebase/firestore/index";
import { MY_SIGNUP_PAGE } from "../../helpers/pages";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(user);
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
  };

  return (
    <Stack
      mx="auto"
      direction="column"
      alignItems="center"
      width={1}
      maxWidth={450}
    >
      <ButtonBase sx={{ mt: 6 }} disableRipple>
        <Image src={Logo} alt="logo" height={150} width={150} />
      </ButtonBase>

      <Typography mt={4} variant="h2" fontWeight={600}>
        Sign In
      </Typography>

      <Stack mt={6} spacing={2.5} width={1}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          startIcon={<IconifyIcon icon="logos:google-icon" />}
          sx={{ bgcolor: "info.main", "&:hover": { bgcolor: "info.dark" } }}
          onClick={handleGoogleLogin}
        >
          Google
        </Button>
      </Stack>

      <Divider sx={{ my: 4.5 }}>Or</Divider>

      <Box component="form" onSubmit={handleSubmit} width={1}>
        <TextField
          id="email"
          name="email"
          type="email"
          color="secondary"
          label="Email Address"
          value={user.email}
          onChange={handleInputChange}
          variant="filled"
          placeholder="mail@example.com"
          autoComplete="email"
          sx={{ mt: 3 }}
          fullWidth
          autoFocus
          required
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          color="secondary"
          type={showPassword ? "text" : "password"}
          value={user.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Min. 8 characters"
          autoComplete="current-password"
          sx={{ mt: 6 }}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: user.password ? 1 : 0,
                  pointerEvents: user.password ? "auto" : "none",
                }}
              >
                <IconButton
                  size="small"
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ border: "none", bgcolor: "transparent !important" }}
                  edge="end"
                >
                  <IconifyIcon
                    icon={
                      showPassword ? "mdi:visibility" : "mdi:visibility-off"
                    }
                    color="neutral.main"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack
          mt={1.5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormControlLabel
            control={
              <Checkbox
                id="remember"
                name="remember"
                size="large"
                color="primary"
              />
            }
            label="Remember me"
            sx={{ ml: -0.75 }}
          />
          <Link
            fontSize="body2.fontSize"
            fontWeight={600}
            underline="hover"
            href="#"
          >
            Reset password?
          </Link>
        </Stack>

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
          fullWidth
        >
          Sign In
        </Button>
      </Box>

      <Typography
        mt={4}
        pb={12}
        variant="body2"
        textAlign={{ xs: "center", md: "left" }}
        letterSpacing={0.25}
      >
        Don’t have an account yet?{" "}
        <Link href={MY_SIGNUP_PAGE} color="primary.main" fontWeight={600}>
          New Account
        </Link>
      </Typography>
    </Stack>
  );
};

export default SignIn;
