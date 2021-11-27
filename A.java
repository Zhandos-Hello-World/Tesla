import java.lang.reflect.Array;
import java.util.*;


public class A{
    static int cutRod(int[] p, int n){
        if(n == 0)
            return 0;
        int q = Integer.MIN_VALUE;
        for(int i = 1; i <= n; i++){
            q = Math.max(q, p[i] + cutRod(p, n - i));
        }
        return q;

    }
    static int memorizedCutRod(int[] p, int n){
        int[] r = new int[n];
        for(int i = 0; i < n; i++){
            r[i] = Integer.MIN_VALUE;
        }
        return memorizedCutRodAux(p, n,r);
    }
    static int memorizedCutRodAux(int[] p, int n, int[] r){
        int q;
        if(r[n] >= 0)
            return r[n];
        if(n == 0)
            q = 0;
        else {
            q = Integer.MIN_VALUE;
            for(int i = 0; i <= n; i++){
                q = Math.max(q, p[i] + memorizedCutRodAux(p, n - i, r));
            }
        }
        r[n] = q;
        return r[n];
    }
    public static String solve(String str){
        int len = str.length();
        String ans = "";
        boolean bool = false;
        for(int i = 0; i < len ; i++){
            if(Character.isLowerCase(str.charAt(i))){
                bool = true;
                return convert(str);
            }
        }
        return str;
    }
    public static String convert(String str){
        String ans = "";
        for(int i = 0; i < str.length(); i++){
            if(Character.isLowerCase(str.charAt(i)))
            ans+=Character.toUpperCase(str.charAt(i));
            else
            ans+=Character.toLowerCase(str.charAt(i));
        }
        return ans;
    }
    static int NUM = 0;
    static void solve(int n){
        int x = n%10;
        System.out.print(n - x);
        
    }
    static int[] a;
    static int[] dp;
    // 8
    // 0   1  1  0  0  0  1  0
    // -1 -1 -1 -1 -1 -1 -1 -1 
    static int f(int i){
        if(i < 0) 
        return 0;
        if(i == 0) 
        return 1;
        if(dp[i] != -1)
        return dp[i];
        if(a[i] == 1) 
        return 0;
        else{
            dp[i] = f(i-1) + f(i-2) + f(i-3);
            return dp[i];
        }
        
    }
    static void print(int[] arr){
        System.out.println("YES");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
    public static void quickSort(int[] array, int low, int high, int[] arr) {
        if (array.length == 0)
            return;
 
        if (low >= high)
            return;
        int middle = low + (high - low) / 2;
        int opora = array[middle];

        int i = low, j = high;
        while (i <= j) {
            while (array[i] < opora) {
                i++;
            }
 
            while (array[j] > opora) {
                j--;
            }
 
            if (i <= j) {
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
        if (low < j)
            quickSort(array, low, j, arr);
 
        if (high > i)
            quickSort(array, i, high, arr);
    }
    public static void main(String[] args) {    
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] job = new int[m];
        for (int i = 0; i < m; i++) {
            job[i] = sc.nextInt();
        }
        long ans = job[0] - 1;
        for(int i = 1; i < job.length; i++){
            if(job[i] >= job[i - 1]){
                ans+= job[i] - job[i - 1]; 
            }
            else{
                ans+= n - job[i - 1] + job[i]; 
            }
        } 
        System.out.println(ans);
        //  1 2 3 4
        //     2 3 3
// 2 2
// 1 2
// 1 2

        
        
        

        

        
        
        
        
        
       /* Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        String[] arr = {"sweden", "poland", "Norway", "United States",
                        "Mayotte", "Albania", "Micronesia", "China", "Ecuador", "Ecuador", 
                        "Portugal", "China", "Indonesia", "Poland", "Poland", "Pakistan",
                        "Russia", "Indonesia", "Brazil", "China"};
        for(int i = 0; i < t; i++){
            int len = arr[i].length(); 
            int cnt = 0;
            arr[i] = arr[i].toLowerCase();
            for(int j = 0; j < len; j++){
                cnt += arr[i].charAt(j) - 96;
            }
            System.out.println(i+1 + " " +  arr[i] + ": " + cnt%10);
        }*/
        
        
        
        /*int k = sc.nextInt();
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        for(int i = 2; i < n + 1; i++){
            for(int j = 1; j <= k && i-j > 0; j++){
                dp[i] += dp[i-j];
            }
        }
        System.out.println(dp[n]);

        
        
        // 1 2  3
        // 1 5  13 
        // +4 +8 +12 +16

        
        
        /*int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        int max = Integer.MIN_VALUE;
        int max_index = 0;
        int min = Integer.MAX_VALUE + 5;
        int min_index = 0;
        for(int i = 0; i < n; i++){
            if(max<arr[i]){
                max = arr[i];
                max_index = i;
            }
            if(min>=arr[i]){
                min = arr[i];
                min_index = i;
            }
        }
        while(arr[0] != max || arr[arr.length - 1] != min){
            if(max_index!=0){
                arr[max_index] = arr[max_index - 1];
                arr[max_index - 1] = max;
                max_index--;
                count++;
            }
            if(arr[arr.length-1] != min){
                arr[min_index] = arr[min_index + 1];
                arr[min_index + 1] = min;
                min_index++;
                count++; 
            }
        }
        // int res = max_index + arr.length - 1 - min_index;
        // if(min_index < arr.length/2)
        //     res -=1;
        System.out.println(count);



        /*int n = sc.nextInt();
        for(int i = 0; i<n; i++){
            int m = sc.nextInt();
            int[][] a = new int[m][5];
            for(int j = 0; j < m; j++){
                a[j][0] = sc.nextInt();
                a[j][1] = sc.nextInt();
                a[j][2] = sc.nextInt();
                a[j][3] = sc.nextInt();
                a[j][4] = sc.nextInt();
            }
            boolean ans = false;
            for(int j = 0; j < m; j++){
                for(int = )
            }
        }



        boolean ans = false;
        for(int i = 0; i<5; i++){
            for(int j = 0; j<5; j++){
                if(j!=i){
                    int cnt1 = 0;
                    int cnt2 = 0;
                    int cntno = 0;
                    for(int k = 0; k<m; k++){
                        if(a[k][i] == 1)
                            cnt1 += 1;
                        if(a[k][j] == 1)
                            cnt2 += 1;
                        if(a[k][i] == 0 && a[k][j] == 0)
                            cntno += 1;
                    }
                    if(cnt1 >= n)
                        ans = true;
                }
            }
        }
        if(ans) 
            System.out.println("Yes");
        else   
            System.out.println("No");*/
    }
}