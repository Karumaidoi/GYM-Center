import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Container, Stack, TextField, Typography } from '@mui/material';
import { Button, Card } from 'antd';

const AuthButton = styled.button`
  background-color: blue;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 0px 8px;
  cursor: pointer;
`;

export default function BlogPage() {
  const { handleSubmit, register, reset, formState } = useForm({
    defaultValues: {
      avatar: 'https://oablrzqumrrftstsepyc.supabase.co/storage/v1/object/public/avatars/default.jpg'
    }
  });

  const { errors } = formState;

  function handleBlur(e, field) {
    const { value } = e.target;

    if (!value) return;

    editingSettings({ [field]: value });
  }

  function onSubmit({ email, userName, password, avatar }) {
    console.log(errors);
    console.log(email, userName, password, avatar);
    signUpUser(
      { email, userName, password, avatar },
      {
        onSettled: () => {
          reset();
        }
      }
    );
  }

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>
        </Stack>

        <Card>
          <h3 style={{ marginBottom: 'rem' }}>Update Account</h3>
          <p>Changes are done on Mouse Leave. Settings will automatically reflect immediately.</p>
          <form>
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'row',
                gap: '4rem',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h5 style={{ marginBottom: '0.7rem' }}>User Name</h5>
                <TextField
                  id="outlined-basic"
                  label={`User Name`}
                  variant="outlined"
                  fullWidth
                  onBlur={(e) => handleBlur(e, 'minWeight')}
                />
              </div>

              <div>
                <h5 style={{ marginBottom: '0.7rem' }}>Phone</h5>
                <TextField
                  id="outlined-basic"
                  label={'Phone (+254)'}
                  variant="outlined"
                  fullWidth
                  onBlur={(e) => handleBlur(e, 'discount')}
                />
              </div>

              <div>
                <h5 style={{ marginBottom: '0.7rem' }}>Password(***)</h5>
                <TextField id="outlined-basic" label={'Password'} variant="outlined" fullWidth onBlur={(e) => handleBlur(e, 'price')} />
              </div>
            </div>
          </form>
        </Card>

        <div style={{ marginBottom: '4rem' }} />
        <Card>
          <h3 style={{ marginBottom: 'rem' }}>Add Admin</h3>
          <p>Changes are done on Mouse Leave. Settings will automatically reflect immediately.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'row',
                gap: '4rem',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h5 style={{ marginBottom: '0.7rem' }}>Email</h5>
                <TextField
                  {...register('email', { required: 'This field is required' })}
                  helperText={errors?.email?.message}
                  error={errors?.email?.message}
                  id="outlined-basic"
                  label={`Email Address `}
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div>
                <h5 style={{ marginBottom: '0.7rem' }}>Password</h5>
                <TextField
                  {...register('password', { required: 'This field is required' })}
                  helperText={errors?.password?.message}
                  error={errors?.password?.message}
                  id="outlined-basic"
                  label={'Password'}
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div>
                <h5 style={{ marginBottom: '0.7rem' }}>User Name</h5>
                <TextField
                  {...register('userName', { required: 'This field is required' })}
                  helperText={errors?.userName?.message}
                  error={errors?.userName?.message}
                  id="outlined-basic"
                  label={'Username'}
                  variant="outlined"
                  defaultValue={''}
                  fullWidth
                />
              </div>

              <div>
                <h5 style={{ marginBottom: '0.7rem' }}>Avatar</h5>
                <TextField {...register('avatar')} id="outlined-basic" label={'Avatar'} variant="outlined" fullWidth disabled />
              </div>
            </div>
            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'flex-end', gap: '1.3rem' }}>
              <Button>Cancel</Button>
              <AuthButton type="submit">Submit</AuthButton>
            </div>
          </form>
        </Card>
      </Container>
    </>
  );
}
