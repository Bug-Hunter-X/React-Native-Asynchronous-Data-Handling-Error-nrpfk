The solution involves using optional chaining (`?.`) or the nullish coalescing operator (`??`) to safely access the `name` property.  Here's the corrected code:

```javascript
const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    setUser(data);
  };

  return (
    <View>
      <Text>{user?.name ?? 'Loading...'}</Text> 
    </View>
  );
};
```

This revised code uses optional chaining (`user?.name`) to only attempt to access the `name` property if `user` is not null or undefined. If `user` is null or undefined, the expression short-circuits and evaluates to `undefined`.  The nullish coalescing operator (`?? 'Loading...'`) then provides a default value ('Loading...') if the property is undefined.  This prevents the error and provides a user-friendly message while the data loads.