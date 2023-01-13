export type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};
export type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};
export type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

export type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

export type UserData = {
  id: string;
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  socials: Socials;
  education: Education;
};

export type UsersApiResponse = {
  data: UserData[];
};

export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

export type UserStatus = "Blacklisted" | "Pending" | "Active" | "Inactive";

export interface AppState {
  appUsers: UserData[];
  isLoggedIn: boolean;
  currentUser: null | CurrentUser;
}

export type AppActions = "LOGIN" | "LOGOUT" | "GETUSERS";

export interface AppReducerActions<S extends AppState, A> {
  type: A;
  payload?: {
    [P in keyof S]: S[P];
  };
}

export interface AppContextType extends AppState {
  dispatch: React.Dispatch<AppReducerActions<AppState, AppActions>>;
}
