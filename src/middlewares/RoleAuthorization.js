export const AuthorizedRoles = (roles) => {
    return (req, res, next) => {
        let role = req.user.role;
        if (!roles.includes(role)) {
          return res.status(400).json({ message: "permission denied" });
        }
        next();
    };
};