import { authReducer } from '../../Auth/authReducer';
import { AuthAction, types } from '../../Types/index';

// @ts-ignore
describe('Tests on Auth Reducer', () => {
  test("Should return default test", () => {
    const state = authReducer(
      { logged: false },
      { type: null }
    );

    expect( state ).toEqual({ logged: false });
  });

  test(`Should authenticate a put "name"`, () => {
    const action: AuthAction = {
      type: types.login,
      payload: {
        name: "John Doe",
      }
    };

    const state = authReducer( { logged: true }, action );

    expect( state ).toEqual({
      logged: true,
      name: action.payload.name
    });
  });

  test("Should delete name ant set logged to false", () => {
    const action: AuthAction = {
      type: types.logout
    };

    const state = authReducer( { logged: true, name: "John Doe" }, action );

    expect( state ).toEqual({ logged: false });
  });
});
