import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ButtonBase from "@mui/material/ButtonBase";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";


import { MY_SIGNIN_PAGE } from "../../helpers/pages";
import { registerUser, loginWithGoogle } from "../../firebase/firestore/index";

const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(user);
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
        Sign Up
      </Typography>

      <Stack mt={6} spacing={2.5} width={1}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          startIcon={<IconifyIcon icon="logos:google-icon" />}
          sx={{ bgcolor: "info.main", "&:hover": { bgcolor: "info.main" } }}
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

        <Stack mt={1.5} alignItems="center" justifyContent="space-between">
          <FormControlLabel
            control={
              <Checkbox
                id="checkbox"
                name="checkbox"
                size="large"
                color="primary"
              />
            }
            label="Remember me"
            sx={{ ml: -0.75 }}
          />
          <Link fontSize="body2.fontSize" fontWeight={600}>
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
          Sign Up
        </Button>
      </Box>

      <Typography
        mt={4}
        pb={12}
        variant="body2"
        textAlign={{ xs: "center", md: "left" }}
        letterSpacing={0.25}
      >
        Already have an account?{" "}
        <Link href={MY_SIGNIN_PAGE} color="primary.main" fontWeight={600}>
          Log in
        </Link>
      </Typography>
    </Stack>
  );
};

export default SignUp;
