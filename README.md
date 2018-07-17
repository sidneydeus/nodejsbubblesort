# Coding Interview

1. Into the file `src/lib/sort.js` implement the function `bubbleSort`, this function must receive an array as parameter and apply the the Bubble Sort algorithm over this array and return it ordered.

The pseudo code ofbubble sort is:

```
procedure bubbleSort( A : list of sortable items ) defined as:
  do
    swapped := false
    for each i in 0 to length(A) - 2 inclusive do:
      if A[i] > A[i+1] then
        swap( A[i], A[i+1] )
        swapped := true
      end if
    end for
  while swapped
end procedure
```

2. You have to implemet an restful API. This API must expose an endpoint that receives an array in the body of the POST request and apply the sort function implemented in the last exercise. It must be implmented into the `src/server.js` file.

3. Implment a client side application where an user can declare an array and push it to the server to get it ordered. 



