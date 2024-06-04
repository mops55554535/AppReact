import { StateSchema } from 'app/providers/StoreProvider';

export const getProfilereadOnly = (state: StateSchema) => state.profile?.readOnly;